clear, close all
image=imread('C:\Users\陈嘉何\Desktop\彩色图像.jpg');	% 将图像读取到内存中
image=im2double(image);%提前把数据转换为double型
imshow(image);% 在图形窗口展示该图像 
imwrite(image,'myimage.png');	% 将该图像存为png格式的文件
grayimage=rgb2gray(image);%把图像调灰
imshow(grayimage);%展示图像
%图像的模糊化
LEN=100;
THETA=20;
PSF1=fspecial('motion',LEN,THETA);
Blurred1=imfilter(grayimage,PSF1,'conv','circular');
figure;
imshow(Blurred1);
%添加噪声
BlurredNoise1=imnoise(Blurred1,'gaussian',0.05);%添加高斯噪声
figure;
imshow(BlurredNoise1);
%进行图像的还原，使用的方法为直接逆滤波法
[M,N,~]=size(image);
Pf=fft2(PSF1,M,N);%使其维度一致
If=fft2(BlurredNoise1);
noise=BlurredNoise1-Blurred1;
Nf=fft2(noise);
deblurred2 = ifft2(If./Pf - Nf./Pf);
deblurred2=im2uint8(deblurred2);%将图像数据重新转换uint8型
figure
imshow(deblurred2);
