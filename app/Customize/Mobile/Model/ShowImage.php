<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 20:35
 */

namespace App\Customize\Mobile\Model;

use function core\convert_obj;
use function Mobile\res_url;

class ShowImage extends Model
{
    protected $table = 'show_image';
    public $timestamps = false;

    public static function getByPlatformAndPosition($platform_id , $position)
    {
        $res = self::where([
                ['platform_id' , '=' , $platform_id] ,
                ['position' , '=' , $position] ,
            ])
            ->get();
        $res = convert_obj($res);
        self::multiple($res);
        return $res;
    }

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        $m->path = res_url($m->path);
    }
}