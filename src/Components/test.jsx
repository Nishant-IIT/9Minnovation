< !--component -->
< !--component -->
< !DOCTYPE html >
    <html lang="en" class="">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Tailwind CSS Navbar with Material Design 3</title>
            <link
                href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
                crossorigin="anonymous" />
        </head>
        <body>
            <div
                class="min-h-screen p-10 pt-32 h-100"
            >
                <nav class="navbar w-full bg-white">
                    <div class="container-lg px-0">
                        <div class="flex w-full items-center">
                            <a class="nav-brand mr-auto ml-0" href="#">Material Tailwind Navbar</a>
                            <button
                                navbar-trigger=""
                                class="navbar-trigger ml-auto mr-0 mb-0 lg:hidden xl:hidden"
                                type="button"
                                aria-controls="navigation"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="navbar-trigger-icon">
                                    <span bar1="" class="navbar-trigger-bar mt-1"
                                    ><span class="hidden origin-[10%_10%] rotate-45"></span
                                    ></span>
                                    <span bar2="" class="bar2 navbar-trigger-bar mt-2"></span>
                                    <span bar3="" class="bar3 navbar-trigger-bar mt-2"
                                    ><span
                                        class="mt-mt-[0.4375rem] hidden origin-[10%_90%] -rotate-45"
                                    ></span
                                        ></span>
                                </span>
                            </button>
                        </div>
                        <div class="collapse navbar-collapse" navbar-menu="">
                            <ul class="navbar-nav">
                                <li>
                                    <a class="nav-link" aria-current="page" href="#">
                                        <i class="material-icons mr-2 text-base opacity-60">article</i>
                                        <span>Documentation</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="nav-link" href="#">
                                        <i class="material-icons mr-2 text-base opacity-60">apps</i>
                                        <span>Components</span>
                                    </a>
                                </li>
                                <li class="flex">
                                    <a class="nav-link" href="#">
                                        <i class="material-icons mr-2 text-base opacity-60">view_carousel</i>
                                        <span>Templates</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="nav-link" href="#">
                                        <i class="fab fa-github mr-2 text-base opacity-60"></i>
                                        <span>Github</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div class="w-full md:w-7/12 pt-5 px-4 mb-8 mx-auto text-center">
                    <div class="text-sm text-gray-700 py-1">
                        This components requires
                        <a
                            href="https://www.material-tailwind.com/docs/html/navbar?ref=tailwindcomponents"
                            class="text-gray-700 font-semibold"
                            target="_blank"
                        >Material Tailwind CSS & JS</a
                        >
                        for the shadows, ripple effects and card classes. <br /><br />
                        A component by<a
                            href="https://www.creative-tim.com?ref=tailwindcomponents"
                            class="text-gray-700 font-semibold"
                            target="_blank"
                        >
                            Creative Tim</a
                        >.
                    </div>
                </div>
            </div>
        </div>

        <!-- from cdn -->
        <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js"></script>
    </body>
</html >