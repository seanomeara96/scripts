import csv
with open("beautyfeatures-09-Dec-2020.csv") as csv_file:
    reader = csv.reader(x.replace("\0", "") for x in csv_file)
    print(reader[0])
