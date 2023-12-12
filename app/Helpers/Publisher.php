<?php

use App\Http\Controllers\PublisherController;

function publisherIntId($id) {
    if ((int)$id === 0) {
        $controller = new PublisherController();
        $publisher = $controller->show($id);
        return $publisher->id;
    }
    return $id;
}
