<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/15
 * Time: 16:49
 */

return [
    'host' => 'http://car.com' ,
    // 域名切记不要带 /
    'res_host' => 'http://pc.api.championcargroup.com/upload' ,
    // refresh token 保存时常
    'refresh_token_duration_type' => 'short' ,
    // 默认头像
    'avatar' => __DIR__ . '/../../../../public/static/image/avatar.jpg' ,
    // 数据长度限制
    'limit' => 20 ,
    // 默认权重
    'weight' => 0 ,
    // 测试 key
    'debug' => 'abc123' ,
    // 上传文件路径
    'upload_dir' => realpath(__DIR__ . '/../../../../public/upload/') ,
    // 10 天内免登陆
    'long_for_login' => 10 * 24 * 3600 ,
    // 1 天内免登陆
    'short_for_login' => 1 * 24 * 3600 ,
];