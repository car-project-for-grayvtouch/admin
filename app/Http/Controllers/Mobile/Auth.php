<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 12:20
 */

namespace App\Http\Controllers\Mobile;

use App\Customize\Mobile\Http\Middleware\UserAuth;
use Illuminate\Http\Request;

class Auth extends Controller
{
    public function __construct(Request $request)
    {
        parent::__construct($request);
        $this->middleware(UserAuth::class);
    }
}