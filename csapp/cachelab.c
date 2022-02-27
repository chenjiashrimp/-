#include "cachelab.h"
#include<stdlib.h>
#include<unistd.h>
#include<stdio.h>
#include<limits.h>
#include<getopt.h>
#include<string.h> 
int s, E, b, S,number_hits, number_miss, number_eviction;

char filename[1000];
char buffer[1000];
typedef struct 
{
	int valid_bit, tag, stamp;//cold miss
}cache_line;
cache_line **cache = NULL;
void update(unsigned int address)
{
	int max_stamp = INT_MIN, max_stamp_id = -1;
	int  block, s_address;// The t value and s value of address
	block=(address>>b);//为什么除以B不行，左移可以？
    s_address=block%S;
	for(int i = 0; i < E; i++)//check whether there is a hit
		if(cache[s_address][i].tag == block)//which means a hit
		{
			//is_placed = 1;
			cache[s_address][i].stamp = 0;
			number_hits++;
			
			return ;
		}
	
	for(int i = 0; i < E; i++)
		if(cache[s_address][i].valid_bit == 0)
		{
			cache[s_address][i].valid_bit = 1;
			cache[s_address][i].tag = block;
			cache[s_address][i].stamp = 0;
			number_miss++;
			return;
		}
	
	number_eviction++;
	number_miss++;
	for(int i = 0; i < E; i++)
		if(cache[s_address][i].stamp > max_stamp)
		{
			max_stamp = cache[s_address][i].stamp;
			max_stamp_id = i;
		}
	cache[s_address][max_stamp_id].tag = block;
	cache[s_address][max_stamp_id].stamp = 0;
	return;
}

void update_time(void)//update the time stamp of each cache line
{
	for(int i = 0; i < S; i++)
		for(int j = 0; j < E; j++)
			if(cache[i][j].valid_bit == 1)//if valid
				cache[i][j].stamp++;
}

int main(int argc,char* argv[])
{
	int opt, temp;//The getopt return value
	char type;//type of a single trace record
	unsigned int address;//address of memory
	number_hits = number_miss = number_eviction = 0;//initialization
	while(-1 != (opt = (getopt(argc, argv, "s:E:b:t:"))))
	{
		switch(opt)
		{
			case 's':s = atoi(optarg);
					 break;
			case 'E':E = atoi(optarg);
					 break;
			case 'b':b = atoi(optarg);
					 break;
			case 't':strcpy(filename, optarg);
					 break;
		}
	}
	
	
	S = (1 << s); // S equals to 2^s
	cache = (cache_line**)malloc(sizeof(cache_line*) * S);
	for(int i = 0; i < S; i++)
		cache[i] = (cache_line*)malloc(sizeof(cache_line) * E);//Important! malloc each row of cache
	for(int i = 0; i < S; i++)
		for(int j = 0; j < E; j++)
		{
			cache[i][j].valid_bit = 0;
			cache[i][j].tag = cache[i][j].stamp = -1;
		}//initialization

    FILE* pFile = fopen(filename,"r");
	while(fscanf(pFile," %c %xu,%d", &type, &address, &temp)>0)//get a whole line
	{
		switch(type)
		{
			case 'L':update(address);
					 break;
			case 'M':update(address);
			case 'S':update(address);
					 break;
		}
		update_time();
	}
    fclose(pFile);

	for(int i = 0; i < S; i++)
		free(cache[i]);
	free(cache);
	
	printSummary(number_hits, number_miss, number_eviction);
	return 0;
}
