<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/3
 * Time: 22:15
 */

namespace App\Customize\Admin\Http\Action;


use function extra\array_unit;
use function Admin\config;
use function Admin\get_form_error;
use function Admin\parse_order;

use App\Customize\Admin\Model\CarSeries;

use Validator;

class CarSeriesAction extends Action
{
    public static function list(array $param)
    {
        $order = parse_order($param['order']);
        $res = CarSeries::list($param , $order , config('app.limit'));
        return self::success($res);
    }

    public static function add(array $param)
    {
        $validator = Validator::make($param , [
            'name' => 'required' ,
            'brand_id' => 'required' ,
//            'car_series_group_id' => 'required' ,
        ] , [
            'name.required' => 'name 尚未提供' ,
            'brand_id.required' => 'brand_id 尚未提供' ,
//            'car_series_group_id.required' => 'car_series_group_id 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $param['weight'] = $param['weight'] != '' ? intval($param['weight']) : config('app.weight');
        $id = CarSeries::insertGetId(array_unit($param , [
            'name' ,
            'brand_id' ,
            'car_series_group_id' ,
            'weight'
        ]));
        return self::success($id);
    }

    public static function edit(array $param)
    {
        $validator = Validator::make($param , [
            'name' => 'required' ,
            'brand_id' => 'required' ,
//            'car_series_group_id' => 'required' ,
        ] , [
            'name.required' => 'name 尚未提供' ,
            'brand_id.required' => 'brand_id 尚未提供' ,
//            'car_series_group_id.required' => 'car_series_group_id 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        if (empty($param['id'])) {
            return self::error('id 尚未提供');
        }
        $m = CarSeries::find($param['id']);
        if (empty($m)) {
            return self::error('未找到 id 对应记录');
        }
        $param['weight'] = $param['weight'] == '' ? $m->weight : $param['weight'];
        CarSeries::updateById($param['id'] , array_unit($param , [
            'name' ,
            'brand_id' ,
            'car_series_group_id' ,
            'weight'
        ]));
        return self::success($param['id']);
    }

    public static function del(array $param)
    {
        $validator = Validator::make($param , [
            'id_list' => 'required' ,
        ] , [
            'id_list.required' => 'id_list 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        $id_list = json_decode($param['id_list'] , true);
        if (empty($id_list)) {
            return self::error('请选择待删除项');
        }
        $res = CarSeries::destroy($id_list);
        return self::success($res);
    }

    public static function detail($id)
    {
        $res = CarSeries::find($id);
        if (empty($res)) {
            return self::error("未找到 id 对应记录");
        }
        return self::success($res);
    }

    public static function all(array $param)
    {
        $res = CarSeries::getAll($param);
        return self::success($res);
    }
}