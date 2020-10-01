import os
import sys
# List of directory names I need to create
brands = ["beautyfeatures", "inhealth", "babysafety", "beautyskincare",
          "allhair", "pregnancyandbaby", "fertilitystore", "haakaa"]

# absolute path to current directory
parent_path = os.path.abspath(".")

# create new directory for each brand
for x in brands:
    path = os.path.join(parent_path, x)
    os.mkdir(path)

# Signal completion
print("Done.")
