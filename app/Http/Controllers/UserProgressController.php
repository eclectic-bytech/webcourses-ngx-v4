<?php

namespace App\Http\Controllers;

use App\Models\UserProgress;

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

    public function completion_cert(int $pid) {
        $name = auth()->user()->first_name . " " . auth()->user()->last_name;

        $path = 'webcourses/publisher-files/29/courses/408/docs/';
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
        $pdf->SetXY(40, 66); // X start, Y start in mm
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
