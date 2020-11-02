/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */
import OneKit from '../js/OneKit'

export default class FileSystemManager {
  constructor(weixinFileSystemManager) {
    this.weixinFileSystemManager = weixinFileSystemManager
  }

  accessSync(bd_path) {
    try {
      const wx_path = OneKit.bd_filePath2wx_filePath(bd_path)
      this.weixinFileSystemManager.accessSync(wx_path)
    } catch (ex) {
      throw new Error('accessSync:fail no such file or directory, accessSync')
    }
  }


  access(bd_object) {
    const bd_path = bd_object.path
    const bd_success = bd_object.success
    const bd_fail = bd_object.fail
    const bd_complete = bd_object.complete
    bd_object = null
    //
    const wx_path = OneKit.bd_filePath2wx_filePath(bd_path)
    const wx_object = {
      path: wx_path,
      success(wx_res) {
        const bd_res = {
          errMsg: wx_res.errMsg
        }
        if (bd_success) {
          bd_success(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      },
      fail(wx_res) {
        const bd_res = wx_res
        if (bd_fail) {
          bd_fail(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      }
    }
    return this.weixinFileSystemManager.access(wx_object)
  }

  saveFileSync(bd_tempFilePath, bd_filePath) {
    if (!bd_filePath) {
      const ext = bd_tempFilePath.substring(bd_tempFilePath.lastIndexOf('.'))
      bd_filePath = OneKit.new_bd_filePath(ext)
    }
    const wx_tempFilePath = bd_tempFilePath
    const wx_filePath = OneKit.bd_filePath2wx_filePath(bd_filePath)
    this.weixinFileSystemManager.saveFileSync(wx_tempFilePath, wx_filePath)
    return bd_filePath
  }


  saveFile(bd_object) {
    const bd_tempFilePath = bd_object.tempFilePath
    const ext = bd_tempFilePath.substring(bd_tempFilePath.lastIndexOf('.'))
    const bd_filePath = bd_object.filePath || OneKit.new_bd_filePath(ext)
    const bd_success = bd_object.success
    const bd_fail = bd_object.fail
    const bd_complete = bd_object.complete
    bd_object = null
    //
    const wx_tempFilePath = bd_tempFilePath
    const wx_filePath = OneKit.bd_filePath2wx_filePath(bd_filePath)
    const wx_object = {
      tempFilePath: wx_tempFilePath,
      filePath: wx_filePath,
      success(wx_res) {
        const bd_res = {
          errMsg: wx_res.errMsg,
          savedFilePath: bd_filePath
        }
        if (bd_success) {
          bd_success(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      },
      fail(wx_res) {
        const bd_res = wx_res
        if (bd_fail) {
          bd_fail(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      }
    }
    return this.weixinFileSystemManager.saveFile(wx_object)
  }

  getSavedFileList(bd_object) {
    return this.weixinFileSystemManager.getSavedFileList(bd_object)
  }

  removeSavedFile(bd_object) {
    const bd_filePath = bd_object.filePath
    const bd_success = bd_object.success
    const bd_fail = bd_object.fail
    const bd_complete = bd_object.complete
    bd_object = null
    //
    const wx_filePath = OneKit.bd_filePath2wx_filePath(bd_filePath)
    const wx_object = {
      filePath: wx_filePath,
      success(wx_res) {
        const bd_res = {
          errMsg: wx_res.errMsg
        }
        if (bd_success) {
          bd_success(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      },
      fail(wx_res) {
        const bd_res = wx_res
        if (bd_fail) {
          bd_fail(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      }
    }
    return this.weixinFileSystemManager.removeSavedFile(wx_object)
  }

  copyFileSync(bd_srcPath, bd_destPath) {
    const wx_srcPath = OneKit.bd_filePath2wx_filePath(bd_srcPath)
    const wx_destPath = OneKit.bd_filePath2wx_filePath(bd_destPath)
    return this.weixinFileSystemManager.saveFileSync(wx_srcPath, wx_destPath)
  }

  copyFile(bd_object) {
    const bd_srcPath = bd_object.srcPath
    const bd_destPath = bd_object.destPath
    const bd_success = bd_object.success
    const bd_fail = bd_object.fail
    const bd_complete = bd_object.complete
    bd_object = null
    //
    const wx_srcPath = OneKit.bd_filePath2wx_filePath(bd_srcPath)
    const wx_destPath = OneKit.bd_filePath2wx_filePath(bd_destPath)
    const wx_object = {
      srcPath: wx_srcPath,
      destPath: wx_destPath,
      success(wx_res) {
        const bd_res = {
          errMsg: wx_res.errMsg
        }
        if (bd_success) {
          bd_success(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      },
      fail(wx_res) {
        const bd_res = wx_res
        if (bd_fail) {
          bd_fail(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      }
    }
    return this.weixinFileSystemManager.copyFile(wx_object)
  }

  getFileInfo(bd_object) {
    const bd_filePath = bd_object.filePath
    const bd_success = bd_object.success
    const bd_fail = bd_object.fail
    const bd_complete = bd_object.complete
    bd_object = null
    //
    const wx_filePath = OneKit.bd_filePath2wx_filePath(bd_filePath)
    const wx_object = {
      filePath: wx_filePath,
      success(wx_res) {
        const bd_res = {
          size: wx_res.size,
          errMsg: wx_res.errMsg
        }
        if (bd_success) {
          bd_success(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      },
      fail(wx_res) {
        const bd_res = wx_res
        if (bd_fail) {
          bd_fail(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      }
    }
    return this.weixinFileSystemManager.getFileInfo(wx_object)
  }

  mkdirSync(bd_dirPath) {
    const wx_dirPath = OneKit.bd_filePath2wx_filePath(bd_dirPath)
    return this.weixinFileSystemManager.mkdirSync(wx_dirPath)
  }

  mkdir(bd_object) {
    const bd_dirPath = bd_object.dirPath
    const bd_success = bd_object.success
    const bd_fail = bd_object.fail
    const bd_complete = bd_object.complete
    bd_object = null
    //
    const wx_dirPath = OneKit.bd_filePath2wx_filePath(bd_dirPath)
    const wx_object = {
      dirPath: wx_dirPath,
      success(wx_res) {
        const bd_res = {
          errMsg: wx_res.errMsg
        }
        if (bd_success) {
          bd_success(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      },
      fail(wx_res) {
        const bd_res = wx_res
        if (bd_fail) {
          bd_fail(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      }
    }
    return this.weixinFileSystemManager.mkdir(wx_object)
  }

  readdirSync(bd_dirPath) {
    const wx_dirPath = OneKit.bd_filePath2wx_filePath(bd_dirPath)
    return this.weixinFileSystemManager.readdirSync(wx_dirPath)
  }

  readdir(bd_object) {
    const bd_dirPath = bd_object.dirPath
    const bd_success = bd_object.success
    const bd_fail = bd_object.fail
    const bd_complete = bd_object.complete
    bd_object = null
    //
    const wx_dirPath = OneKit.bd_filePath2wx_filePath(bd_dirPath)
    const wx_object = {
      dirPath: wx_dirPath,
      success(wx_res) {
        const bd_res = {
          files: wx_res.files,
          errMsg: wx_res.errMsg
        }
        if (bd_success) {
          bd_success(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      },
      fail(wx_res) {
        const bd_res = wx_res
        if (bd_fail) {
          bd_fail(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      }
    }
    return this.weixinFileSystemManager.readdir(wx_object)
  }

  readFileSync(bd_filePath, bd_encoding) {
    const wx_filePath = OneKit.bd_filePath2wx_filePath(bd_filePath)
    const wx_encoding = bd_encoding
    return this.weixinFileSystemManager.readFileSync(wx_filePath, wx_encoding)
  }

  readFile(bd_object) {
    const bd_filePath = bd_object.filePath
    const bd_encoding = bd_object.encoding
    const bd_success = bd_object.success
    const bd_fail = bd_object.fail
    const bd_complete = bd_object.complete
    bd_object = null
    //
    const wx_filePath = OneKit.bd_filePath2wx_filePath(bd_filePath)
    const wx_encoding = bd_encoding
    const wx_object = {
      filePath: wx_filePath,
      encoding: wx_encoding,
      success(wx_res) {
        const bd_res = {
          data: wx_res.data,
          errMsg: wx_res.errMsg
        }
        if (bd_success) {
          bd_success(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      },
      fail(wx_res) {
        const bd_res = wx_res
        if (bd_fail) {
          bd_fail(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      }

    }
    return this.weixinFileSystemManager.readFile(wx_object)
  }

  renameSync(bd_oldPath, bd_newPath) {
    const wx_oldPath = OneKit.bd_filePath2wx_filePath(bd_oldPath)
    const wx_newPath = OneKit.bd_filePath2wx_filePath(bd_newPath)
    return this.weixinFileSystemManager.renameSync(wx_oldPath, wx_newPath)
  }

  rename(bd_object) {
    const bd_newPath = bd_object.newPath
    const bd_oldPath = bd_object.oldPath
    const bd_success = bd_object.success
    const bd_fail = bd_object.fail
    const bd_complete = bd_object.complete
    //
    const wx_newPath = OneKit.bd_filePath2wx_filePath(bd_newPath)
    const wx_oldPath = OneKit.bd_filePath2wx_filePath(bd_oldPath)
    const wx_object = {
      oldPath: wx_oldPath,
      newPath: wx_newPath,
      success(wx_res) {
        const bd_res = {
          errMsg: wx_res.errMsg
        }
        if (bd_success) {
          bd_success(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      },
      fail(wx_res) {
        const bd_res = wx_res
        if (bd_fail) {
          bd_fail(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      }
    }
    return this.weixinFileSystemManager.rename(wx_object)
  }

  rmdirSync(bd_dirPath) {
    const wx_dirPath = OneKit.bd_filePath2wx_filePath(bd_dirPath)
    return this.weixinFileSystemManager.rmdirSync(wx_dirPath)
  }

  rmdir(bd_object) {
    const bd_dirPath = bd_object.dirPath
    const bd_success = bd_object.success
    const bd_fail = bd_object.fail
    const bd_complete = bd_object.complete
    bd_object = null
    //
    const wx_dirPath = OneKit.bd_filePath2wx_filePath(bd_dirPath)
    const wx_object = {
      dirPath: wx_dirPath,
      success(wx_res) {
        const bd_res = {
          errMsg: wx_res.errMsg
        }
        if (bd_success) {
          bd_success(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      },
      fail(wx_res) {
        const bd_res = wx_res
        if (bd_fail) {
          bd_fail(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      }
    }
    return this.weixinFileSystemManager.rmdir(wx_object)
  }

  statSync(bd_path) {
    const wx_path = OneKit.bd_filePath2wx_filePath(bd_path)
    return this.weixinFileSystemManager.statSync(wx_path)
  }

  stat(bd_object) {
    const bd_path = bd_object.path
    const bd_success = bd_object.success
    const bd_fail = bd_object.fail
    const bd_complete = bd_object.complete
    bd_object = null
    //
    const wx_path = OneKit.bd_filePath2wx_filePath(bd_path)
    const wx_object = {
      path: wx_path,
      success(wx_res) {
        const bd_res = {
          errMsg: wx_res.errMsg,
          stats: wx_res.stats
        }
        if (bd_success) {
          bd_success(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      },
      fail(wx_res) {
        const bd_res = wx_res
        if (bd_fail) {
          bd_fail(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      }
    }
    return this.weixinFileSystemManager.stat(wx_object)
  }

  unlinkSync(bd_filePath) {
    const wx_filePath = OneKit.bd_filePath2wx_filePath(bd_filePath)
    return this.weixinFileSystemManager.unlinkSync(wx_filePath)
  }

  unlink(bd_object) {
    const bd_filePath = bd_object.filePath
    const bd_success = bd_object.success
    const bd_fail = bd_object.fail
    const bd_complete = bd_object.complete
    bd_object = null
    //
    const wx_filePath = OneKit.bd_filePath2wx_filePath(bd_filePath)
    const wx_object = {
      filePath: wx_filePath,
      success(wx_res) {
        const bd_res = {
          errMsg: wx_res.errMsg
        }
        if (bd_success) {
          bd_success(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      },
      fail(wx_res) {
        const bd_res = wx_res
        if (bd_fail) {
          bd_fail(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      }
    }
    return this.weixinFileSystemManager.unlink(wx_object)
  }

  unzip(bd_object) {
    const bd_zipFilePath = bd_object.zipFilePath
    const bd_targetPath = bd_object.targetPath
    const bd_success = bd_object.success
    const bd_fail = bd_object.fail
    const bd_complete = bd_object.complete
    //
    const wx_targetPath = OneKit.bd_filePath2wx_filePath(bd_targetPath)
    const wx_object = {
      zipFilePath: bd_zipFilePath,
      targetPath: wx_targetPath,
      success(wx_res) {
        const bd_res = {
          errMsg: wx_res.errMsg
        }
        if (bd_success) {
          bd_success(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      },
      fail(wx_res) {
        const bd_res = wx_res
        if (bd_fail) {
          bd_fail(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      }
    }
    return this.weixinFileSystemManager.unzip(wx_object)
  }

  writeFileSync(bd_filePath, data, encoding) {
    const wx_filePath = OneKit.bd_filePath2wx_filePath(bd_filePath)
    return this.weixinFileSystemManager.writeFileSync(wx_filePath, data, encoding)
  }

  writeFile(bd_object) {
    const bd_filePath = bd_object.filePath
    const bd_data = bd_object.data
    const bd_encoding = bd_object.encoding
    const bd_success = bd_object.success
    const bd_fail = bd_object.fail
    const bd_complete = bd_object.complete
    bd_object = null
    //
    const wx_filePath = OneKit.bd_filePath2wx_filePath(bd_filePath)
    const wx_object = {
      filePath: wx_filePath,
      data: bd_data,
      encoding: bd_encoding,
      success(wx_res) {
        const bd_res = {
          errMsg: wx_res.errMsg
        }
        if (bd_success) {
          bd_success(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      },
      fail(wx_res) {
        const bd_res = wx_res
        if (bd_fail) {
          bd_fail(bd_res)
        }
        if (bd_complete) {
          bd_complete(bd_res)
        }
      }
    }
    return this.weixinFileSystemManager.writeFile(wx_object)
  }
}
