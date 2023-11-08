<?php

namespace App\Http\Controllers;

use App\Models\UserProgress;
use App\Models\CourseSyllabus;
use App\Models\Course;

use Illuminate\Http\Request;
use setasign\Fpdi\Fpdi;

class UserProgressController extends Controller
{
    public function userProgress(int $uid, int $cid) {
        return UserProgress
            ::where('user_id', $uid)
            ->where('course_id', $cid)
            ->first();
    }

    public function completion_cert(int $aid)
    {
        $user_progress = UserProgress::findOrFail(resolve('pid'));

        if ($user_progress)
        {
            $certificate_activity = CourseSyllabus
                ::where('style', 'completion-cert')
                ->where('course_id', $user_progress->course_id)
                ->first();

            if ($user_progress->total_activities_completed < $certificate_activity->seq - 2) {
                // user did not complete enough activities for completion cert. why ..seq-2?
                // seq starts at 0; activity with cert doesn't need to be completed for user to qualify.
                abort(code:403);
            };

            $name = auth()->user()->first_name . " " . auth()->user()->last_name;
            $course = Course::find($user_progress->course_id);

            $path = "webcourses/publisher-files/{$course->publisher_id}/courses/{$course->id}/docs/";
            $fileExt = '.pdf';
            $file = 'zT9d674nZ6YHupSU'.$fileExt;

            // initiate FPDI
            $pdf = new Fpdi('Landscape','mm',array(279.4, 215.9));
            // add a page
            $pdf->AddPage();
            // set the source file
            $pdf->setSourceFile($path . $file);
            // import page 1
            $tplId = $pdf->importPage(1);
            // use the imported page and place it at point 10,10 with a width of 100 mm
            $pdf->useTemplate($tplId, 0, 0, 279.4, 215.9);
            // $pdf->AddFont('Comic','I');

            $pdf->SetFont('Times','',30); // Font Name, Font Style (eg. 'B' for Bold), Font Size
            $pdf->SetTextColor(0,15,165); // RGB

            // $pdf->SetXY(40, 66); // X start, Y start in mm
            if ($course->id === 408) $pdf->SetXY(40, 66); // X start, Y start in mm
            if ($course->id != 408) $pdf->SetXY(40, 150); // X start, Y start in mm

            $pdf->Cell(200,40,$name,0,1,"C");

            header('Content-Description: File Transfer');
            header('Content-Type: application/octet-stream');
            header('Content-Disposition: attachment; filename=certificate.pdf');
            header('Expires: 0');
            header('Cache-Control: must-revalidate');
            header('Pragma: public');
            flush(); // Flush system output buffer
            readfile($pdf->Output());
        }
    }

}
