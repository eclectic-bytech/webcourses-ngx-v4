<?php

namespace App\Http\Controllers;

use App\Models\UserAnswer;
use Illuminate\Http\Request;

class UserAnswerController extends Controller
{
    public function user_answer(Request $request, int $aid) {
        $user = auth()->user();
        $user_answers = $request->Input();
        return 2100;
    }
}
