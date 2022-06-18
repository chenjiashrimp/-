function [f,P1]=FFTCalcute(Data,Fs)%傅里叶变换，用于观察频谱
L = length(Data);
Y = fft(Data);
P2 = abs(Y/L);
P1 = P2(1:L/2+1);
P1(2:end-1) = 2*P1(2:end-1);
f = Fs*(0:(L/2))/L;
end
