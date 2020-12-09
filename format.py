import json
csv = ""
with open("csvjson.json") as json_file:
    data = json.load(json_file)
    for item in data:
        outlinks = item["Internal outlinks"].split()
        for link in outlinks:
            if link.startswith("http://"):
                csv += f'{item["URL"]}, {link}\n'
with open("formatted.csv", "w") as csv_file:
    csv_file.write(csv)
