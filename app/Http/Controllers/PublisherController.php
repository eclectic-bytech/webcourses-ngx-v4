<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Publisher;
use App\Models\UserRole;

class PublisherController extends Controller
{

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $pub = (int)$id;
        $uid_or_alias[] = ($pub == 0) ? ['id_alias', $id] : ['owner_uid', $pub];
        return Publisher::where($uid_or_alias)->sole();
    }

}
