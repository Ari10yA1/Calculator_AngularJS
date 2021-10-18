#include<iostream>
using namespace std;

int NthRoot(int n, int m)
	{
	    int low=1;
	    int high=m;
	    if(m==1){
	        return 1;
	    }
	    while(low<=high){
	        int mid=(high+low)/2,check;
            check=mid;
	        for(int i=1;i<n;i++){
                check*=mid;
            }
	        if(check==m){
	            cout<< mid;
	        }
	        if(check<m){
	            low=mid-1;
	        }
	        else{
	            high=mid+1;
	        }
	    
	   }
	   cout<< -1;
	    
	}

int main(){
    int n,m;
    cin>>n>>m;
    NthRoot(n,m);
} 