<template>
  <div>
    <div class="login_header">
      <div class="user">
        <div class="user_img">
          <img src="@/assets/logo.png" alt="">
        </div>
        <div class="username_box">
          <h5>用户名</h5>
          <span>申请认证</span>
        </div>
      </div>
      <div class="username_message">
        <div><span>0</span><span>动态</span></div>
        <div><span>0</span><span>关注</span></div>
        <div><span>0</span><span>粉丝</span></div>
      </div>
    </div>
    <div class="login_content">
      <ul>
        <li><span><van-icon name="edit" />编辑资料</span><van-icon name="arrow" /></li>
        <li><span><van-icon name="chat-o" />小思同学</span><van-icon name="arrow" /></li>
        <li><span><van-icon name="warning-o" />退出登录</span><van-icon name="arrow" /></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .login_header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 210px;
    padding: 30px 20px;
    background-color: rgb(1, 117, 255);
    color: white;
    .user {
      display: flex;
      .user_img {
        width: 65px;
        height: 65px;
        border-radius: 32.5px;
        margin-right: 10px;
        background-color: #fff;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .username_box {
        h5 {
          margin: 4px 0;
        }
        span {
          padding: 1px 4px;
          border-radius: 2px;
          background-color: #fff;
          color: rgb(1, 117, 255);
          font-size: 12px;
          font-weight: 700;
        }
      }
    }
    .username_message {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0 30px;
      >div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
  .login_content {
    ul {
      color: rgb(96, 97, 103);
      li {
        display: flex;
        padding: 13px;
        justify-content: space-between;
      }
    }
  }
</style>
