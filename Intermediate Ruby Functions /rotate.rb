


# -------First example, without the "n" rotation --------
 
def rotate(array)
	
	last = array.pop
	newarray = array.unshift(last)
	puts newarray
end
# method -pop- , recovers the last value of an array
# method -unshift-, puts the value asigned to it on the beginning of an array 

rotate([1,2,3,4,5])


# -------First example, without the "n" rotation --------


def rotate(array,n)

	if n > 0
		while n > 0 
			last = array.pop
			newarray = array.unshift(last)
				
			n-=1
			end
	end
puts array
end

# method -pop- , recovers the last value of an array
# method -unshift-, puts the value asigned to it on the beginning of an array 

rotate([1,2,3,4,5],1)