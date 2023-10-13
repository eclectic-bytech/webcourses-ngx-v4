<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Publisher;
use App\Models\UserRole;

class PublisherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $uidInt = (int)$id;
        if ($uidInt != 0)
        {
            return Publisher::where('owner_uid', $uidInt)
                ->sole();
        }
        else
        {
            return Publisher::where('id_alias', $id)
                ->sole();
        }
    }

    public function request_access()
    {
        $uid = auth()->user()->id;
        $user_role = new UserRole();
        $user_role->user_id = $uid;
        $user_role->role_id = 4;
        $user_role->save();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
