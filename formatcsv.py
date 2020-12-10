import csv
'''
This script takes the exported table data from 

'''
data = ""
with open("beautyfeatures-09-Dec-2020.csv", "r", encoding="utf16", newline="") as csv_file:
    my_file = csv.reader(csv_file, delimiter="\t")
    line_count = 0
    for line in my_file:
        if line_count > 0:
            for link in line[6].split("\n"):
                if link.startswith("http://"):
                    data += f"{line[1]}, {link}\n"
        line_count += 1
with open("formatted.csv", "w") as new_file:
    new_file.write(data)
