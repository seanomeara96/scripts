import csv
# Pairs a url with the contining urls that are redirects and creates a csv
data = ""
with open("beautyfeatures-11-Dec-2020 (1).csv", "r", encoding="utf16", newline="") as csv_file:
    my_file = csv.reader(csv_file, delimiter="\t")
    line_count = 0
    for line in my_file:
        if line_count > 0:
            for link in line[6].split("\n"):
                data += f"{line[1]}, {link}\n"
        line_count += 1
with open("formatted.csv", "w") as new_file:
    new_file.write(data)
