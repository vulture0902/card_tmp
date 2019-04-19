require "fileutils"

dir = "build/contracts/"

FileUtils.cp("#{dir}/Card.json","public/src/Card.json")
FileUtils.cp("#{dir}/Hello.json","public/src/Hello.json")

FileUtils.cp("#{dir}/MappingExample.json","public/src/MappingExample.json")
FileUtils.cp("#{dir}/MappingUser.json","public/src/MappingUser.json")
