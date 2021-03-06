<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/26
 * Time: 10:41
 */

namespace App\Http\Controllers\PcApi;


use App\Customize\PcApi\Http\Action\CarTypeAction;
use Illuminate\Validation\Validator;
use function PcApi\error;
use function PcApi\form_error;
use function PcApi\success;

use function PcApi\config;

class CarType extends Controller
{
    public function all()
    {
        $param = $this->request->post();
        $param['language'] = $param['language'] ?? null;
        $res = CarTypeAction::all($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}