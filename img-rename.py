import os
import sys
# programatically rename images
# start with som, use time elapsed since last modification and the directory name
current_working_dirname = sys.argv[1].split("\\").pop()
with os.scandir(sys.argv[1]) as it:
    for entry in it:
        if not entry.name.startswith(current_working_dirname) and entry.is_file():
            # print(os.path.join(os.getcwd(), f'{current_working_dirname}-{entry.stat().st_mtime}.{entry.name.split(".").pop()}'))
            os.rename(r'{os.path.join(sys.argv[1], entry.name)}',
                      r'{current_working_dirname}-{entry.stat().st_mtime}.{entry.name.split(".").pop()}')

# C:\Users\seano\Pictures
