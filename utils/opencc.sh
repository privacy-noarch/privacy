#!/bin/sh

'''
This script is meant for internal use for privacy.noarch,
and belongs to the public domain if possible.

DISCLAIMER: THERE IS NO ERROR-HANDLING EFFORT IN IT. USE AT YOUR OWN RISK.
'''

res=`find $* -type f -name '*.html'`

for file in $res
do
	echo $file
	opencc -i $file -c s2twp -o $file
done
