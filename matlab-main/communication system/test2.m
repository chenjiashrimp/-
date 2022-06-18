clc;
clear all;
Snr = -5:0.5:10;%信噪比
L = 1000000;
Nsamp = 8;
fc = 5000;%载波
fs = 8*fc;
msg = randi([0,1],1,L);
msgup = upsample(1-2*msg,Nsamp);
h = rcosfir(0.5,[-5,5],8,1,'sqrt');%升余弦滤波器
msgShape = conv(msgup,h);%基带成型
t = (0:length(msgShape)-1)/fs;
signal = cos(2*pi*fc*t).*msgShape;
for i = 1:length(Snr)
    i
    signaln = awgn(signal,Snr(i),'measured');
    %% 解调
    signal0 = signaln.*cos(2*pi*fc*t);%乘以载波
    signalPass = 2*conv(signal0,h);%低通滤波
    %% 下采样
    sample = signalPass(81:8:end);%8倍下采样
    sample0 = sample(1:end-10);%去除后面10位全零
    %% 判决
    demsg = sample0<0;
    Ber(i) = sum(demsg~=msg)/L;
end
figure
semilogy(Snr,Ber,'-ko');
ylabel('BER')
xlabel('SNR')
grid on
%说明test2的功能，test2主要用于探究误码率曲线。通过改变信噪比，研究误码率与信噪比的关系




