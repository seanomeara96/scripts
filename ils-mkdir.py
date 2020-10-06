import os
import sys
# List of directory names I need to create
brands = ["beautyfeatures", "inhealth", "babysafety", "beautyskincare",
          "allhair", "pregnancyandbaby", "fertilitystore", "haakaa"]


def instructions():
    print("Supply a path and a new directory name as command line arguments.")


# if no command line arguments are supplied
if len(sys.argv) < 2:
    instructions()
    exit()

# if only one argument is supplied
if len(sys.argv) == 2:
    print("You are missing an argument.")
    instructions()
    exit()

# if too many arguments are supplied
if len(sys.argv) > 3:
    print("You have supplied too many arguments.")
    instructions()
    exit()

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
    subdirectory_name = x + "-" + new_dir_name
    path = os.path.join(new_dir_path, subdirectory_name)
    os.mkdir(path)

# Signal completion
print("Done.")
