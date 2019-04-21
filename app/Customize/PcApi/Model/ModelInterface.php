<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/21
 * Time: 11:38
 */

namespace App\Customize\PcApi\Model;

use Illuminate\Database\Eloquent\Collection;

interface ModelInterface
{
    static function single(Model $m = null);
    static function multiple(Collection $list);
}