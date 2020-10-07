import os
# programatically rename images
# start with som, use time elapsed since last modification and the directory name
current_working_dirname = os.getcwd().split("\\").pop()
with os.scandir() as it:
    for entry in it:
        if not entry.name.startswith(current_working_dirname) and entry.is_file():
            # print(os.path.join(os.getcwd(), f'{current_working_dirname}-{entry.stat().st_mtime}.{entry.name.split(".").pop()}'))
            os.rename(r'{os.path.join(os.getcwd(), entry.name)}',
                      r'{current_working_dirname}-{entry.stat().st_mtime}.{entry.name.split(".").pop()}')
