<?php

namespace App\Http\Controllers;

use App\Models\UserAnswer;
use Illuminate\Http\Request;

class UserAnswerController extends Controller
{
    public function user_answer(Request $request, int $aid) {
        $user = auth()->user();
        $activity_meta = getActivityMeta($aid); // global helper defined in app/Helpers/Course.php

        $user_progress = false; // this should be a Guard?
        //  If user progress exists, user has read access to the course (which comes with write answers access)

        $user_answers = $request->Input();
        return 42;
    }
}
