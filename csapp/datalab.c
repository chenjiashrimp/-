/* 
 * CS:APP Data Lab 
 * 
 * <Please put your name and userid here>
 * 
 * bits.c - Source file with your solutions to the Lab.
 *          This is the file you will hand in to your instructor.
 *
 * WARNING: Do not include the <stdio.h> header; it confuses the dlc
 * compiler. You can still use printf for debugging without including
 * <stdio.h>, although you might get a compiler warning. In general,
 * it's not good practice to ignore compiler warnings, but in this
 * case it's OK.  
 */

#if 0
/*
 * Instructions to Students:
 *
 * STEP 1: Read the following instructions carefully.
 */

You will provide your solution to the Data Lab by
editing the collection of functions in this source file.

INTEGER CODING RULES:
 
  Replace the "return" statement in each function with one
  or more lines of C code that implements the function. Your code 
  must conform to the following style:
 
  int Funct(arg1, arg2, ...) {
      /* brief description of how your implementation works */
      int var1 = Expr1;
      ...
      int varM = ExprM;

      varJ = ExprJ;
      ...
      varN = ExprN;
      return ExprR;
  }

  Each "Expr" is an expression using ONLY the following:
  1. Integer constants 0 through 255 (0xFF), inclusive. You are
      not allowed to use big constants such as 0xffffffff.
  2. Function arguments and local variables (no global variables).
  3. Unary integer operations ! ~
  4. Binary integer operations & ^ | + << >>
    
  Some of the problems restrict the set of allowed operators even further.
  Each "Expr" may consist of multiple operators. You are not restricted to
  one operator per line.

  You are expressly forbidden to:
  1. Use any control constructs such as if, do, while, for, switch, etc.
  2. Define or use any macros.
  3. Define any additional functions in this file.
  4. Call any functions.
  5. Use any other operations, such as &&, ||, -, or ?:
  6. Use any form of casting.
  7. Use any data type other than int.  This implies that you
     cannot use arrays, structs, or unions.

 
  You may assume that your machine:
  1. Uses 2s complement, 32-bit representations of integers.
  2. Performs right shifts arithmetically.
  3. Has unpredictable behavior when shifting if the shift amount
     is less than 0 or greater than 31.


EXAMPLES OF ACCEPTABLE CODING STYLE:
  /*
   * pow2plus1 - returns 2^x + 1, where 0 <= x <= 31
   */
  int pow2plus1(int x) {
     /* exploit ability of shifts to compute powers of 2 */
     return (1 << x) + 1;
  }

  /*
   * pow2plus4 - returns 2^x + 4, where 0 <= x <= 31
   */
  int pow2plus4(int x) {
     /* exploit ability of shifts to compute powers of 2 */
     int result = (1 << x);
     result += 4;
     return result;
  }

FLOATING POINT CODING RULES

For the problems that require you to implement floating-point operations,
the coding rules are less strict.  You are allowed to use looping and
conditional control.  You are allowed to use both ints and unsigneds.
You can use arbitrary integer and unsigned constants. You can use any arithmetic,
logical, or comparison operations on int or unsigned data.

You are expressly forbidden to:
  1. Define or use any macros.
  2. Define any additional functions in this file.
  3. Call any functions.
  4. Use any form of casting.
  5. Use any data type other than int or unsigned.  This means that you
     cannot use arrays, structs, or unions.
  6. Use any floating point data types, operations, or constants.


NOTES:
  1. Use the dlc (data lab checker) compiler (described in the handout) to 
     check the legality of your solutions.
  2. Each function has a maximum number of operations (integer, logical,
     or comparison) that you are allowed to use for your implementation
     of the function.  The max operator count is checked by dlc.
     Note that assignment ('=') is not counted; you may use as many of
     these as you want without penalty.
  3. Use the btest test harness to check your functions for correctness.
  4. Use the BDD checker to formally verify your functions
  5. The maximum number of ops for each function is given in the
     header comment for each function. If there are any inconsistencies 
     between the maximum ops in the writeup and in this file, consider
     this file the authoritative source.

/*
 * STEP 2: Modify the following functions according the coding rules.
 * 
 *   IMPORTANT. TO AVOID GRADING SURPRISES:
 *   1. Use the dlc compiler to check that your solutions conform
 *      to the coding rules.
 *   2. Use the BDD checker to formally verify that your solutions produce 
 *      the correct answers.
 */


#endif
//1
/* 
 * bitXor - x^y using only ~ and & 
 *   Example: bitXor(4, 5) = 1
 *   Legal ops: ~ &
 *   Max ops: 14
 *   Rating: 1
 */
int bitXor(int x, int y) {//实现异或，按位运算符就考虑一位，所以写出真值表（00 10 01 11），再根据真值表得到式子
  return ~(x&y)&~(~x&~y);
}
/* 
 * tmin - return minimum two's complement integer 
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 4
 *   Rating: 1
 */
int tmin(void) {//把最小补码给表示出来，取反就是最大补码

  return 0x1<<31;

}
//2
/*
 * isTmax - returns 1 if x is the maximum, two's complement number,
 *     and 0 otherwise 
 *   Legal ops: ! ~ & ^ | +
 *   Max ops: 10
 *   Rating: 1
 */
int isTmax(int x) {//最大补码则返回1，！的最大好处是把非0 1的数调整为0 或者 1
  return !(x^0x7fffffff);
}
/* 
 * allOddBits - return 1 if all odd-numbered bits in word set to 1
 *   where bits are numbered from 0 (least significant) to 31 (most significant)
 *   Examples allOddBits(0xFFFFFFFD) = 0, allOddBits(0xAAAAAAAA) = 1
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 12
 *   Rating: 2
 */
int allOddBits(int x) {
  x=x&0xAAAAAAAA;//将无关的偶数位都调成0
  return !(x^0xAAAAAAAA);//用异或方便比较两个数是不是一样
}
/* 
 * negate - return -x 
 *   Example: negate(1) = -1.
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 5
 *   Rating: 2
 */
int negate(int x) {
  return ~x+1;//由定义延申的结论，负数的补码为对应的正数取反再加1
 //从定义出发就是模减去绝对值，再当作unsigned转为01序列
}
//3
/* 
 * isAsciiDigit - return 1 if 0x30 <= x <= 0x39 (ASCII codes for characters '0' to '9')
 *   Example: isAsciiDigit(0x35) = 1.
 *            isAsciiDigit(0x3a) = 0.
 *            isAsciiDigit(0x05) = 0.
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 15
 *   Rating: 3
 */
int isAsciiDigit(int x) {
  int minus1=x+(~0x30+1);//用到上一题结论了，如何不用减号表示两数相减
  int minus2=0x39+(~x+1);
  return !(minus1>>31)&!(minus2>>31);//判断差值的正负
}
/* 
 * conditional - same as x ? y : z 
 *   Example: conditional(2,4,5) = 4
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 16
 *   Rating: 3
 */
int conditional(int x, int y, int z) {
  int x1=!x;
  int x2=!(!x);//用两次！
  return ((x1<<31>>31)&z)|((x2<<31>>31)&y);
}
/* 
 * isLessOrEqual - if x <= y  then return 1, else return 0 
 *   Example: isLessOrEqual(4,5) = 1.
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 24
 *   Rating: 3
 */
int isLessOrEqual(int x, int y) {
  int x1=x>>31&1;
  int y1=y>>31&1;//用01表示正负号
  int minus=x+(~y+1);//这里单纯只用减法判断是不够的，因为相减结果可能会溢出，所以部分情况需要通过正负号比较大小
  int z=minus>>31&1;//当然了相减还有个例外就是两数相等的情况，这时候最高位为0不是1，所以分开讨论
  return (!(x1^y1)&z)|((x1^y1)&x1)|!(x^y);//多的特殊情况直接用|隔开就可以
}
//4
/* 
 * logicalNeg - implement the ! operator, using all of 
 *              the legal operators except !
 *   Examples: logicalNeg(3) = 0, logicalNeg(0) = 1
 *   Legal ops: ~ & ^ | + << >>
 *   Max ops: 12
 *   Rating: 4 
 */
int logicalNeg(int x) {
  int m=((x+1)>>31)&1;
  int n=((x-1)>>31)&1;//只有0与其他数不同，所以要找出0独特的性质，我当时想到的时构造双射，只有0经过运算能得到某个数
 //之后用到了0的相邻两数符号不一样的性质
  int x1=((~x)>>31)&1;
  int x2=((~(x+1))>>31)&1;//不过还要考虑特殊情况，就是两个在边界的数
  return (m^n)&x1&x2;
}
/* howManyBits - return the minimum number of bits required to represent x in
 *             two's complement
 *  Examples: howManyBits(12) = 5
 *            howManyBits(298) = 10
 *            howManyBits(-5) = 4
 *            howManyBits(0)  = 1
 *            howManyBits(-1) = 1
 *            howManyBits(0x80000000) = 32
 *  Legal ops: ! ~ & ^ | + << >>
 *  Max ops: 90
 *  Rating: 4
 */
int howManyBits(int x) {//一开始我以为要一位一位考虑，可是其实可以使用类似二分法的方式，一次考虑一半
  int b16,b8,b4,b2,b1,b0;
  int sign=x>>31;
  x=(sign&~x)|(~sign&x);//这个处理要注意，如果是负数要取反，为了避免算术右移补1
  b16=!!(x>>16)<<4;//技巧右移4，从而用1求出需要表示的位数，因此每次考虑的位数也是2的幂次方
  x=x>>b16;
  b8=!!(x>>8)<<3;//这里又用到两次！！可以把本在其他位上的1都弄到最低位
  x=x>>b8;
  b4=!!(x>>4)<<2;
  x=x>>b4;
  b2=!!(x>>2)<<1;
  x=x>>b2;
  b1=!!(x>>1);
  x=x>>b1;
  b0=x;//最后这个不要落下，实在想不明白就自己举个简单的例子把
  return b16+b8+b4+b2+b1+b0+1;
}
//float
/* 
 * floatScale2 - Return bit-level equivalent of expression 2*f for
 *   floating point argument f.
 *   Both the argument and result are passed as unsigned int's, but
 *   they are to be interpreted as the bit-level representation of
 *   single-precision floating point values.
 *   When argument is NaN, return argument
 *   Legal ops: Any integer/unsigned operations incl. ||, &&. also if, while
 *   Max ops: 30
 *   Rating: 4
 */
unsigned floatScale2(unsigned uf) {//求uf的2倍，浮点数的表示和几种情况自然要搞清楚
  int exp=(uf&0x7f800000)>>23;//这个是要得到阶码
  int sign=uf&(1<<31);//正负
  if(exp==0) return uf<<1|sign;//特殊情况右移阶码不变 尾数*2，相当于整体变为2倍
  if(exp==255) return uf;//∞或者NaN
  exp++;
  if(exp==255) return 0x7f800000|sign;//溢出了，记得考虑正负
  return (exp<<23)|(uf&0x807fffff);//普通情况就改一下阶码再复原就可以了
}
/* 
 * floatFloat2Int - Return bit-level equivalent of expression (int) f
 *   for floating point argument f.
 *   Argument is passed as unsigned int, but
 *   it is to be interpreted as the bit-level representation of a
 *   single-precision floating point value.
 *   Anything out of range (including NaN and infinity) should return
 *   0x80000000u.
 *   Legal ops: Any integer/unsigned operations incl. ||, &&. also if, while
 *   Max ops: 30
 *   Rating: 4
 */
int floatFloat2Int(unsigned uf) {
  int _s=uf>>31;
  int exp=((uf&0x7f800000)>>23)-127;//得到次数
  int frac=((uf&0x007fffff))|0x00800000;//得到小数部分，尾数的1之前隐藏了，int没有这个操作，需要复原
  if(!(uf&0x7fffffff)) return 0;//+0 和 -0 的情况
  if(exp>31) return 0x80000000u;//尾数1开头的，左移31位就溢出了
  if(exp<0) return 0;//浮点数<1的情况

  if(exp>23) frac<<=(exp-23);//浮点数的小数点相当于是没了，所以这里需要移位调整
  else frac>>=(23-exp);

  if(frac>>31) return 0x80000000u; //浮点数表示的范围更大，转变后溢出了
  else if(!((frac>>31)^_s)) return frac;
  else return ~frac+1;//浮点数没有补码的概念，所以还要判断正负
}
/* 
 * floatPower2 - Return bit-level equivalent of the expression 2.0^x
 *   (2.0 raised to the power x) for any 32-bit integer x.
 *
 *   The unsigned value that is returned should have the identical bit
 *   representation as the single-precision floating-point number 2.0^x.
 *   If the result is too small to be represented as a denorm, return
 *   0. If too large, return +INF.
 * 
 *   Legal ops: Any integer/unsigned operations incl. ||, &&. Also if, while 
 *   Max ops: 30 
 *   Rating: 4
 */
unsigned floatPower2(int x) {
  if(x>127) return 0xff<<23;//溢出了，注意取不取等呢？这边127是可以得到的
  else if(x<-148) return 0;//注意148如何得到，除了前面阶码最小-126以外，注意尾数的小数点后面还有23位，-149可以取到
  else if(x>=-126) return (x+127)<<23;//规范化，x偏移再左移，尾数此时不用管刚好就是1
  else return 1<<(148+x);//阶码必须都是0了，就看尾数怎么移动了
}
