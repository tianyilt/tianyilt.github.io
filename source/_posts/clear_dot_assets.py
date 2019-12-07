import os, sys  # 导入模块
import re


def rename_subfolders(path):  # 定义函数名称
    old_names = os.listdir(path)  # 取路径下的文件名，生成列表
    for old_name in old_names:  # 遍历列表下的文件名
        if old_name != sys.argv[0]:  # 代码本身文件路径，防止脚本文件放在path路径下时，被一起重命名
            new_name = old_name.replace('.assets', '')
            try:
                os.rename(os.path.join(path, old_name), os.path.join(path, new_name))  # 子文件夹重命名
                print(old_name, "has been renamed successfully! New name is: ", new_name)  # 输出提示
            except:
                print('no access to', old_name)


def alter_passages(edit_file, parent_folder):
    yml = '---\ntitle: %s\ncategories: %s\n---\n' % (edit_file.rstrip('.md'), parent_folder)
    edit_file = './' + parent_folder + '/' + edit_file
    with open(edit_file, 'r+', encoding='utf-8') as f:
        file_lines = f.readlines()
        i = 0
        if file_lines[0][0] != '-':  # 防止重复插入yml
            file_lines.insert(0, yml)
        if file_lines[2].split(': ')[-1][0:-1] != parent_folder:#如果目录名字变更,那么分类类别也相应改变
            file_lines[2] = 'categories: %s\n' % parent_folder
        for each_line in file_lines:
            new_line = re.sub('.assets', '', each_line)
            file_lines[i] = new_line
            i = i + 1
    with open(edit_file, 'w', encoding='utf-8') as f:
        f.writelines(file_lines)


top_folders = [i for i in os.listdir('.') if os.path.isdir(i)]
print(top_folders)
for i in top_folders:
    if i[0] != '.':  # 防止.idea被进行处理
        rename_subfolders('./' + i)
        sub_passages = [j for j in os.listdir('./' + i) if not os.path.isdir(j)]
        for j in sub_passages:
            try:
                alter_passages(j, i)
            except:
                pass
# print(top_folders)
# for i in top_folders:
#    rename_subfolders('.')
