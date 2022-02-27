#include "cachelab.h"
#include<stdlib.h>
#include<unistd.h>
#include<stdio.h>
#include<getopt.h>
#include<limits.h>
#include<string.h>



int number_hits,number_miss,number_eviction;
int s,S,E,b,B,help_mode,verbose_mode;
typedef struct {
     int valid_bit;
     int tag;
     int LRU_counter;
}cache_line;
cache_line **cache=NULL;

char filename[1000];
char buffer[1000];



void update(unsigned int address){
    int max=INT_MIN,max_index=-1;
    int s_address,block;
    s_address=(address>>b)&((-1U)>>(32-s));
    block=address>>(s+b);
    for(int i=0;i<E;i++){
        if(cache[s_address][i].tag==block){
            cache[s_address][i].LRU_counter=0;
            number_hits++;
            return;
        }
    }
    for(int i=0;i<E;i++){
        if(cache[s_address][i].valid_bit==0){
            cache[s_address][i].valid_bit=1;
            cache[s_address][i].tag=block;
            cache[s_address][i].LRU_counter=0;
            number_miss++;
            return;
        }
    }
    number_eviction++;
    number_miss++;
    for(int i=0;i<E;i++){
        if(cache[s_address][i].LRU_counter>max){
            max=cache[s_address][i].LRU_counter;
            max_index=i;
        }
    }
    cache[s_address][max_index].tag=block;
    cache[s_address][max_index].LRU_counter=0;
    return;
}
void update_time(void){
    for(int i=0;i<S;i++){
        for(int j=0;j<E;j++){
            if(cache[i][j].valid_bit==1){
                cache[i][j].LRU_counter++;
            }
        }
    }
}
int main(int argc,char* argv[]){
    char identifier;
    unsigned int address;
    int size;
    int opt;
    number_hits=number_miss=number_eviction=0;
    while(-1!=(opt=(getopt(argc,argv,"hvs:E:b:t:")))){
        switch(opt){
            case 'h':
            help_mode=1;
            break;
            case 'v':
            verbose_mode=1;
            break;
            case 's':
            s=atoi(optarg);
            break;
            case 'E':
            E=atoi(optarg);
            break;
            case 'b':
            b=atoi(optarg);
            break;
            case 't':
            strcpy(filename,optarg);
            break;
        }
    }
    if(help_mode==1){
        system("can help_info");
        exit(0);
    }

    FILE* pFile=fopen(filename,"r");
    if(pFile==NULL){
        fprintf(stderr,"The File is wrong!\n");
    }

    S=(1<<s);
    B=(1<<b);

    cache=(cache_line**)malloc(sizeof(cache_line*)*S);
    for(int i=0;i<S;i++){
        cache[i]=(cache_line*)malloc(sizeof(cache_line)*E);
    }

    for(int i=0;i<S;i++){
        for(int j=0;j<E;j++){
            cache[i][j].valid_bit=0;
            cache[i][j].tag=-1;
            cache[i][j].LRU_counter=-1;
        }
    }

    
    while(fgets(buffer,1000,pFile)){
        sscanf(buffer,"%c %xu,%d",&identifier,&address,&size);
        switch(identifier){
            case 'I':
            break;
            case 'L':
            update(address);
            break;
            case 'M':
            update(address);
            case 'S':
            update(address);
            break;
        }
        update_time();
    }
    
    for(int i=0;i<S;i++){
        free(cache[i]);
    }
    free(cache);
    fclose(pFile);
    printSummary(number_hits, number_miss, number_eviction);
	return 0;
}
