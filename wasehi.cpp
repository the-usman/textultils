#include <iostream>
using namespace std;
int main()
{
	int a[5] = {1, 3, 5, 6, 98};
	int num, SIZE = 5;
	cout << "WHICH NUMBER YOU WAN TO FIND\n";
	cin >> num;
	for (int i = 0; i <= SIZE; i++)
		if (a[i] >= num)
		{
			cout << i << endl;
			break;
		}
	return 0;
}