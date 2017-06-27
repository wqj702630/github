const pool = require('./pool');

module.exports = {
  register: (req, res)=>{
    //从请求消息中读取uname和upwd
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    //从连接池中获取连接，执行数据库INSERT
    pool.getConnection((err, conn)=>{
      conn.query("INSERT INTO jd_user VALUES(NULL,?,?)",[uname, upwd],(err, result)=>{
        if(result.affectedRows===1){ //判定INSERT操作影响的行数
          var data = {code:200, msg:'register succ'};
        }else {
          var data = {code:500,msg:'sql err'}
        }
        res.json(data);
        conn.release();
      })
    })
  },
  login: (req, res)=>{

  }
}