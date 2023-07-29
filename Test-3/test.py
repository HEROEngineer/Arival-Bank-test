def convert_to_word(number):
    word_dict = {
        10: "ten",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hunderd"
    }
    
    if number in word_dict:
        return word_dict[number]
    else:
        return number

for i in range(101):
    if i % 10 == 0:
        print(convert_to_word(i))
    else:
        print(i)