package coml.test;

import java.io.File;

public class FileUtils {
	
	public static void batchRename(String filePath, String prefix, int start) {
		File file = new File(filePath);
		File[] files = file.listFiles();
		for (int i = 0, j = start; i < files.length; i++, j++) {
			File f = files[i];
			if (!f.isDirectory()) {
				String oldName = f.getName();

				String path = f.getParentFile().getPath() + File.separator;

				String type = oldName.substring(oldName.lastIndexOf("."));

				String newName = prefix + "_" + j + type;

				String file_ = path + newName;

				System.out.println(file_);

				File newFile = new File(file_);
				f.renameTo(newFile);
			}
		}
	}
	
	public static void batchRename(String filePath, String regex) {
		File file = new File(filePath);
		File[] files = file.listFiles();
		for (int i = 0, j = files.length; i < files.length; i++, j++) {
			File f = files[i];
			if (!f.isDirectory()) {
				
				String oldName = f.getName();

				String path = f.getParentFile().getPath() + File.separator;

				String newName = oldName.replaceAll(regex, "");

				String file_ = path + newName;

				System.out.println(file_);

				File newFile = new File(file_);
				
				f.renameTo(newFile);
			}
		}
	}
	
}
