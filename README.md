# TreeLink - Clon de LinkTree

## Descripción

Este proyecto es un clon de LinkTree con las siguientes carácterísticas.

* ReactJS y Typescript
* Metodología MET
* SASS

## Lanzar proyecto

Ejecutar los siguientes comandos en orden
```
npm i
npm start
```

## Librerías usadas

* react-router-dom
* classnames
* @fortawesome

## Estructura

# src

* [assets/](.\src\assets)
  * [icons/](.\src\assets\icons)
    * [dark-mode.png](.\src\assets\icons\dark-mode.png)
    * [light-mode.png](.\src\assets\icons\light-mode.png)
  * [images/](.\src\assets\images)
* [components/](.\src\components)
  * [common/](.\src\components\common)
    * [Avatar/](.\src\components\common\Avatar)
      * [Avatar.module.sass](.\src\components\common\Avatar\Avatar.module.sass)
      * [index.tsx](.\src\components\common\Avatar\index.tsx)
    * [Button/](.\src\components\common\Button)
      * [Button.module.sass](.\src\components\common\Button\Button.module.sass)
      * [index.tsx](.\src\components\common\Button\index.tsx)
    * [Input/](.\src\components\common\Input)
      * [index.tsx](.\src\components\common\Input\index.tsx)
      * [Input.module.sass](.\src\components\common\Input\Input.module.sass)
    * [Phone/](.\src\components\common\Phone)
      * [index.tsx](.\src\components\common\Phone\index.tsx)
      * [Phone.module.sass](.\src\components\common\Phone\Phone.module.sass)
    * [Select/](.\src\components\common\Select)
      * [index.tsx](.\src\components\common\Select\index.tsx)
      * [Select.module.sass](.\src\components\common\Select\Select.module.sass)
    * [Social/](.\src\components\common\Social)
      * [index.tsx](.\src\components\common\Social\index.tsx)
      * [Social.module.sass](.\src\components\common\Social\Social.module.sass)
    * [ThemeIcon/](.\src\components\common\ThemeIcon)
      * [index.tsx](.\src\components\common\ThemeIcon\index.tsx)
      * [ThemeIcon.module.sass](.\src\components\common\ThemeIcon\ThemeIcon.module.sass)
    * [Tree/](.\src\components\common\Tree)
      * [index.tsx](.\src\components\common\Tree\index.tsx)
      * [Tree.module.sass](.\src\components\common\Tree\Tree.module.sass)
    * [index.ts](.\src\components\common\index.ts)
  * [layout/](.\src\components\layout)
    * [Container/](.\src\components\layout\Container)
      * [Container.module.sass](.\src\components\layout\Container\Container.module.sass)
      * [index.tsx](.\src\components\layout\Container\index.tsx)
    * [Navbar/](.\src\components\layout\Navbar)
      * [index.tsx](.\src\components\layout\Navbar\index.tsx)
      * [Navbar.module.sass](.\src\components\layout\Navbar\Navbar.module.sass)
    * [Wrapper/](.\src\components\layout\Wrapper)
      * [index.tsx](.\src\components\layout\Wrapper\index.tsx)
      * [Wrapper.module.sass](.\src\components\layout\Wrapper\Wrapper.module.sass)
    * [index.ts](.\src\components\layout\index.ts)
* [constants/](.\src\constants)
  * [index.ts](.\src\constants\index.ts)
  * [routeNames.ts](.\src\constants\routeNames.ts)
* [context/](.\src\context)
  * [ThemeContext.tsx](.\src\context\ThemeContext.tsx)
  * [UserContext.tsx](.\src\context\UserContext.tsx)
* [data/](.\src\data)
  * [user.json](.\src\data\user.json)
* [hooks/](.\src\hooks)
  * [index.ts](.\src\hooks\index.ts)
  * [useProfile.ts](.\src\hooks\useProfile.ts)
  * [useTheme.ts](.\src\hooks\useTheme.ts)
* [routes/](.\src\routes)
  * [index.ts](.\src\routes\index.ts)
  * [MainRoute.tsx](.\src\routes\MainRoute.tsx)
* [styles/](.\src\styles)
  * [global.sass](.\src\styles\global.sass)
  * [_mixins.sass](.\src\styles\_mixins.sass)
* [types/](.\src\types)
  * [responses.ts](.\src\types\responses.ts)
  * [types.ts](.\src\types\types.ts)
* [views/](.\src\views)
  * [Home/](.\src\views\Home)
    * [Home.module.sass](.\src\views\Home\Home.module.sass)
    * [index.tsx](.\src\views\Home\index.tsx)
  * [Preview/](.\src\views\Preview)
    * [index.tsx](.\src\views\Preview\index.tsx)
    * [Preview.module.sass](.\src\views\Preview\Preview.module.sass)
* [index.tsx](.\src\index.tsx)
* [react-app-env.d.ts](.\src\react-app-env.d.ts)
* [setupTests.ts](.\src\setupTests.ts)
* [TreeLink.tsx](.\src\TreeLink.tsx)
