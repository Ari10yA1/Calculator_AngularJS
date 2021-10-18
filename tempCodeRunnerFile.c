#include<iostream>

int NthRoot(int n, int m)
	{
	    int low=1;
	    int high=m;
	    if(m==1){
	        return 1;
	    }
	    while(low<=high){
	        int mid=(high+low)/2;
	        int check=pow(mid,n);
	        if(check==m){
	            return mid;
	        }
	        if(check<m){
	            low=mid-1;
	        }
	        else{
	            high=mid+1;
	        }
	    
	   }
	   return -1;
	    
	}

int main(){
    int n,m;
    cin>>n>>m;
    NthRoot(n,m);
}    