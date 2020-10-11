import os
import sys
import random
# programatically rename images
# start with som, use time elapsed since last modification and the directory name
current_working_dirname = sys.argv[1].split("\\").pop()
with os.scandir(sys.argv[1]) as it:
    for entry in it:
        if not entry.name.startswith(current_working_dirname) and entry.is_file():
            entry_path = os.path.join(sys.argv[1], entry.name)
            new_name = f'{current_working_dirname}-{entry.stat().st_mtime}-{random.random()}-.{entry.name.split(".").pop()}'
            new_entry = os.path.join(sys.argv[1], new_name)
            if not entry_path == new_entry:
                os.rename(entry_path,
                          new_entry)

# C:\Users\seano\Pictures
