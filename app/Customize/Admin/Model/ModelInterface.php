<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/21
 * Time: 11:38
 */

namespace App\Customize\Admin\Model;

use Traversable;

interface ModelInterface
{
    static function single($m = null);
    static function multiple(Traversable $list);
}