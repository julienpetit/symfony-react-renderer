<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class DefaultController
 * @package App\Controller
 */
class DefaultController extends Controller
{
    /**
     * @Route("/reviews", name="review_list")
     */
    public function listAction(Request $request)
    {
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/reviews/create", name="review_create")
     */
    public function createAction(Request $request)
    {
        return $this->render('default/index.html.twig');
    }
}