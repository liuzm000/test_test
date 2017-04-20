package coml.test;

public class A {

	/**
	 * @param args
	 * 
	 * 
	 * 
MD5 : 74:72:FC:72:2A:93:58:BF:C1:49:E7:93:24:84:9B:24
SHA1: CD:FD:1A:94:4B:A3:C1:CC:00:B2:83:6B:C9:C6:C7:B8:0C:12:80:36
	 * 
	 * 
	 */
	public static void main(String[] args) {
		String filePath = "G:\\QQ_FILES\\iccon\\新UI\\";
		String regex = "icon";
//		 FileUtils.batchRename(filePath, regex);
		FileUtils.batchRename(filePath, regex,46);
		
		try {
//			ZipUtil.zipFolder("d:\\test002\\", "d:\\test0021.zip");
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
	}
}
