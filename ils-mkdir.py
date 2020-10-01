import os
import sys
# List of directory names I need to create
brands = ["beautyfeatures", "inhealth", "babysafety", "beautyskincare",
          "allhair", "pregnancyandbaby", "fertilitystore", "haakaa"]

# path to new directory
path_to_new_directory = sys.argv[1]

# name of new directory
new_dir_name = sys.argv[2]

# join to make new directory to add brand directories to
new_dir_path = os.path.join(path_to_new_directory, new_dir_name)

# make new parent directory
os.mkdir(new_dir_path)

# create new directory for each brand
for x in brands:
    path = os.path.join(new_dir_path, x)
    os.mkdir(path)

# Signal completion
print("Done.")
