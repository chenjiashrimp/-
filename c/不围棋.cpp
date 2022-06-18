#include<iostream>
#include<cstdlib>
#include<conio.h>
#include<string>
#include<fstream>
#include  <string >
#include<sstream>
using namespace std;
int ChessRecord[10][10] = {};
int ChessRecord1[10][10] = {};
bool x = true;
bool y = true;
bool z = false;
int a[4] = { 0,0,-1,1 };
int b[4] = { 1,-1,0,0 };
void check1(int n, int m) {
	if (m < 1 || m>9 || n < 1 || n>9)
		return;
	for (int i = 0;i < 4;i++) {
		if (ChessRecord[n + a[i]][m + b[i]] == 0 && 0 < n + a[i] && n + a[i] < 10 && 0 < m + b[i] && m + b[i] < 10) {
			z = false;
			break;
		}
		else if (ChessRecord[n + a[i]][m + b[i]] == ChessRecord[n][m] && ChessRecord1[n + a[i]][m + b[i]] == 0) {
			ChessRecord1[n][m] = 1;
			check1(n + a[i], m + b[i]);
			ChessRecord1[n][m] = 0;
		}
		else
			continue;
	}
}
void check(int n, int m) {
	if (m < 1 || m>9 || n < 1 || n>9)
		return;
	for (int i = 0;i < 4;i++) {
		if (ChessRecord[n + a[i]][m + b[i]] == 0 && 0 < n + a[i] && n + a[i] < 10 && 0 < m + b[i] && m + b[i] < 10) {
			y = false;
			break;
		}
		else if (ChessRecord[n + a[i]][m + b[i]] == ChessRecord[n][m] && ChessRecord1[n + a[i]][m + b[i]] == 0) {
			ChessRecord1[n][m] = 1;
			check(n + a[i], m + b[i]);
			ChessRecord1[n][m] = 0;
		}
		else
			continue;
	}
}
void save()
{
	//这一部分是要写入txt,注意的是ofstream是代表从内存到外面的文件，所以是out
	ofstream outfile("C:\\Users\\陈嘉何\\Desktop\\新建文本文档.txt", ios::in | ios::out | ios::binary);
	if (!outfile.is_open())
	{
		cout << " the file open fail" << endl;
		exit(1);
	}
	for (int i = 1;i <= 9;i++)
	{
		for (int j = 1;j <= 9;j++)
		{
			outfile << ChessRecord[i][j] << " ";
		}
		outfile << "\r\n";
	}
	ChessRecord[0][0] = x;
	outfile << ChessRecord[0][0];
	outfile.close();
}
void read() {

	//这一部分是要从txt读入,这里时从外面的文件写入到内存，所以使用in
	ifstream infile("C:\\Users\\陈嘉何\\Desktop\\新建文本文档.txt", ios::in | ios::out | ios::binary);;
	if (!infile.is_open())
	{
		exit(1);
	}
	string line, s;
	int row = 1;
	while (getline(infile, line))
	{

		int col = 1;
		stringstream ss;//注意这个的头文件是 #include<sstream>
		ss << line;
		while (ss)
		{
			int a;
			ss >> a;
			ChessRecord[row][col] = a;
			col++;
		}
		row++;
		x = ChessRecord[0][0];
	}
	infile.close();
}
void chessboard() {
	cout << endl;
	cout << endl;
	cout << "  ";
	for (int i = 1;i <= 9;i++)
		cout << " " << i;
	cout << endl;
	for (int j = 1;j <= 9;j++) {
		cout << j << " ";
		if (j == 1) {
			for (int k = 1;k <= 9;k++) {
				if (k == 1) {
					if (ChessRecord[j][k] == 0 && ChessRecord[j][k + 1] == 0)
						cout << "┌─";
					else if (ChessRecord[j][k] == 0 && ChessRecord[j][k + 1] != 0)
						cout << "┌ ";
					else if (ChessRecord[j][k] == 1)
						cout << "●";
					else
						cout << "○";
				}
				else if (k == 9) {
					if (ChessRecord[j][k] == 0)
						cout << "┐";
					else if (ChessRecord[j][k] == 1)
						cout << "●";
					else
						cout << "○";
				}
				else {
					if (ChessRecord[j][k] == 0 && ChessRecord[j][k + 1] == 0)
						cout << "┬─";
					else if (ChessRecord[j][k] == 0 && ChessRecord[j][k + 1] != 0)
						cout << "┬ ";
					else if (ChessRecord[j][k] == 1)
						cout << "●";
					else
						cout << "○";
				}
			}
		}
		else if (j != 1 && j != 9) {
			for (int k = 1;k <= 9;k++) {
				if (k == 1) {
					if (ChessRecord[j][k] == 0 && ChessRecord[j][k + 1] == 0)
						cout << "├─";
					else if (ChessRecord[j][k] == 0 && ChessRecord[j][k + 1] != 0)
						cout << "├ ";
					else if (ChessRecord[j][k] == 1)
						cout << "●";
					else
						cout << "○";

				}
				else if (k == 9) {
					if (ChessRecord[j][k] == 0)
						cout << "┤";
					else if (ChessRecord[j][k] == 1)
						cout << "●";
					else
						cout << "○";
				}
				else {
					if (ChessRecord[j][k] == 0 && ChessRecord[j][k + 1] == 0)
						cout << "┼─";
					else if (ChessRecord[j][k] == 0 && ChessRecord[j][k + 1] != 0)
						cout << "┼ ";
					else if (ChessRecord[j][k] == 1)
						cout << "●";
					else
						cout << "○";
				}
			}
		}
		else
			for (int k = 1;k <= 9;k++) {
				if (k == 1) {
					if (ChessRecord[j][k] == 0 && ChessRecord[j][k + 1] == 0)
						cout << "└─";
					else if (ChessRecord[j][k] == 0 && ChessRecord[j][k + 1] != 0)
						cout << "└ ";
					else if (ChessRecord[j][k] == 1)
						cout << "●";
					else
						cout << "○";
				}
				else if (k == 9) {
					if (ChessRecord[j][k] == 0)
						cout << "┘";
					else if (ChessRecord[j][k] == 1)
						cout << "●";
					else
						cout << "○";
				}
				else {
					if (ChessRecord[j][k] == 0 && ChessRecord[j][k + 1] == 0)
						cout << "┴─";
					else if (ChessRecord[j][k] == 0 && ChessRecord[j][k + 1] != 0)
						cout << "┴ ";
					else if (ChessRecord[j][k] == 1)
						cout << "●";
					else
						cout << "○";
				}
			}
		cout << endl;
	}
}
void beginning() {
	cout << " -------------------------" << endl;
	cout << "|          选择          |" << endl;
	cout << "|        1.新开始        |" << endl;
	cout << "|         2.存盘         |" << endl;
	cout << "|         3.读盘         |" << endl;
	cout << "|         4.结束         |" << endl;
	cout << "|    请按下对应的数字    |" << endl;
	cout << " -------------------------" << endl;
}
void quit() {
	cout << " -------------------------" << endl;
	cout << "|          选择          |" << endl;
	cout << "|       1.我按错了       |" << endl;
	cout << "|      2.存档并退出      |" << endl;
	cout << "|       3.直接退出       |" << endl;
	cout << "|                        |" << endl;
	cout << "|    请按下对应的数字    |" << endl;
	cout << " -------------------------" << endl;
}
void over_black() {
	cout << " -------------------------" << endl;
	cout << "|                       |" << endl;
	cout << "|                       |" << endl;
	cout << "|       黑方获胜！      |" << endl;
	cout << "|   白方真垃圾哈哈哈！  |" << endl;
	cout << "|                       |" << endl;
	cout << "|                       |" << endl;
	cout << " -------------------------" << endl;
}
void over_white() {
	cout << " -------------------------" << endl;
	cout << "|                       |" << endl;
	cout << "|                       |" << endl;
	cout << "|       白方获胜！      |" << endl;
	cout << "|   黑方真垃圾哈哈哈！  |" << endl;
	cout << "|                       |" << endl;
	cout << "|                       |" << endl;
	cout << " -------------------------" << endl;
}
int main() {
	system("color 80");
	int n, m = 0;
	int press = 0;
	beginning();
	cin >> press;
	if (press == 4)
		return 0;
	if (press == 1) {
		system("cls");
		chessboard();
	}
	if (press == 3) {
		read();
		system("cls");
		chessboard();
	}
	for (;;) {
		cout << "It is your turn:";
		int n, m = 0;
		cin >> n >> m;
		if (n == -1 && m == -1) {
			system("cls");
			quit();
			int press1 = 0;
			cin >> press1;
			if (press1 == 3)
				return 0;
			if (press1 == 1) {
				system("cls");
				chessboard();
				if (x)
					x = false;
				else
					x = true;
			}
			if (press1 == 2) {
				system("cls");
				save();
				return 0;
			}
		}
		if (ChessRecord[n][m] != 0) {
			cout << "该位置已落子，请重新选择！" << endl;
			continue;
		}
		else if (n < 1 || n>9 || 0 < m < 1 || m>9) {
			cout << "您把子下在棋盘外了，请重新选择！" << endl;
			continue;
		}
		else {
			if (x) {
				ChessRecord[n][m] = 1;
				system("cls");
				x = false;
				y = true;
				chessboard();
				check(n, m);
				if (y) {
					system("cls");
					over_white();
					return 0;
				}
				for (int i = 0;i < 4;i++) {
					if (ChessRecord[n + a[i]][m + b[i]] == 2) {
						z = true;
						check1(n + a[i], m + b[i]);
						break;
					}
				}
				if (z) {
					system("cls");
					over_white();
					return 0;
				}
			}
			else if (!x) {
				ChessRecord[n][m] = 2;
				system("cls");
				x = true;
				y = true;
				chessboard();
				check(n, m);
				if (y == 1) {
					system("cls");
					over_black();
					return 0;
				}
				for (int i = 0;i < 4;i++)
					if (ChessRecord[n + a[i]][m + b[i]] == 1) {
						z = true;
						check1(n + a[i], m + b[i]);
						break;
					}
				if (z) {
					system("cls");
					over_black();
					return 0;
				}
			}
		}
	}
	return 0;
}
