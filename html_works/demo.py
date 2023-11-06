result = map(int,input().split())
sum_total = 0
for i in result:
    if(i>=10):
        sum_total += 1
print(sum_total)