<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/27
 * Time: 14:36
 */

namespace App\Customize\Mobile\Model;


use function core\convert_obj;
use Exception;
use function Mobile\get_value;

class StagingBuyApplication extends Model
{
    protected $table = 'staging_buy_application';
    public $timestamps = false;

    public static function list(array $param = [] , $limit = 20)
    {
        $where = [];
        $res = self::where($where)
            ->paginate($limit);
        $res = convert_obj($res);
        self::multiple($res->data);
        return $res;
    }

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('参数 1 类型错误');
        }
        $m->status_explain = get_value('business.staging_buy_application_status' , $m->status);

    }
}