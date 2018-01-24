<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ReviewController
 * @package App\Controller
 * @Route("/{_locale}", defaults={"_locale"="fr"})
 */
class ReviewController extends Controller
{
    /**
     * @Route("/reviews", name="review_list")
     * @Route("/reviews/create", name="review_create")
     */
    public function reviewAction(Request $request)
    {
        return $this->render('default/index.html.twig');
    }
}