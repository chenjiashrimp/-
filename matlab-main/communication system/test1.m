clc;
clear all;
Snr = 5;%信噪比
L = 100;
Nsamp = 8;
fc = 5000;%载波
fs = 8*fc;
msg = randi([0,1],1,L);%生成随机的0，1信号，长度为L的数组
msgup = upsample(1-2*msg,Nsamp);%采样函数
h = rcosfir(0.5,[-5,5],8,1,'sqrt');%升余弦滤波器
msgShape = conv(msgup,h);%基带成型
t = (0:length(msgShape)-1)/fs;
figure
plot(t,msgShape)
ylabel('幅度')
xlabel('时间')
title('BPSK调制低通基带成型波形')
signal = cos(2*pi*fc*t).*msgShape;%实现BPSK调制
figure
plot(t,signal)
ylabel('幅度')
xlabel('时间')
title('BPSK调制信号波形')
[fre,Amp] = FFTCalcute(signal,fs);
figure
plot(fre,Amp)
ylabel('幅度')
xlabel('频谱(Hz)')
title('BPSK调制信号频谱')
signaln = awgn(signal,Snr,'measured');
[fren,Ampn] = FFTCalcute(signaln,fs);
figure
plot(t,signaln)
ylabel('幅度')
xlabel('时间')
title('经过信道的调制信号波形')
figure
plot(fren,Ampn)
ylabel('幅度')
xlabel('频谱(Hz)')
title('经过信道的信号频谱')
%% 解调
signal0 = signaln.*cos(2*pi*fc*t);%乘以载波
signalPass = 2*conv(signal0,h);%低通滤波
figure
plot(signalPass)
ylabel('幅度')
xlabel('时间')
title('解调低通滤波波形')
%% 下采样
sample = signalPass(81:8:end);%8倍下采样
sample0 = sample(1:end-10);%去除后面10位全零
figure
stem(sample0)
title('8倍下采样')
%% 判决
demsg = sample0<0;
figure
subplot(211)
stairs(msg)
axis([1,L,-0.5,1.5])
title('原始信息')
subplot(212)
stairs(demsg)
axis([1,L,-0.5,1.5])
title('解调信息')
%简单说明test1的功能，实现从随机信号生成、BPSK调制到最后解调判决的全过程。本程序会生成8个图像，分别是不同阶段的波形图和频谱图



