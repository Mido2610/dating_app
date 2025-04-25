import 'package:dating_app/config/app/app_routes.dart';
import 'package:dating_app/features/auth/presentation/screens/profile%20user/widgets/birthday_page.dart';
import 'package:dating_app/features/auth/presentation/screens/profile%20user/widgets/first_name_page.dart';
import 'package:dating_app/features/auth/presentation/screens/profile%20user/widgets/select_gender.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:dating_app/features/auth/presentation/blocs/add_info_user/add_info_user_bloc.dart';

class AddInfoWrapper extends StatelessWidget {
  const AddInfoWrapper({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (_) => AddInfoUserBloc(),
      child: const _AddInfoNavigator(),
    );
  }
}

class _AddInfoNavigator extends StatefulWidget {
  const _AddInfoNavigator();

  @override
  State<_AddInfoNavigator> createState() => _AddInfoNavigatorState();
}

class _AddInfoNavigatorState extends State<_AddInfoNavigator> {
  final _navigatorKey = GlobalKey<NavigatorState>();

  @override
  Widget build(BuildContext context) {
    return PopScope(
      canPop: false,
      onPopInvokedWithResult: (bool didPop, dynamic result) {
        final NavigatorState? navigator = _navigatorKey.currentState;
        if (navigator != null && navigator.canPop()) {
          navigator.pop(result);
        }
      },
      child: Scaffold(
        body: Navigator(
          key: _navigatorKey,
          initialRoute: Routes.FIRST_NAME,
          onGenerateRoute: _onGenerateRoute,
        ),
      ),
    );
  }

  Route _onGenerateRoute(RouteSettings settings) {
    Widget page;
    switch (settings.name) {
      case Routes.FIRST_NAME:
        page = FirstNamePage();
        break;
      case Routes.BIRTHDAY:
        page = SelectUserBirthDayPage();
        break;
      case Routes.GENDER:
        page = GenderSelectionPage();
        break;
      default:
        page = FirstNamePage();
    }

    return MaterialPageRoute(
      builder:
          (_) => BlocListener<AddInfoUserBloc, AddInfoUserState>(
            listener: (context, state) {
              state.maybeWhen(
                success: (data, message) {
                  Navigator.of(
                    context,
                  ).pushNamedAndRemoveUntil(Routes.HOME, (route) => false);
                },
                error: (data, message) {
                  ScaffoldMessenger.of(
                    context,
                  ).showSnackBar(SnackBar(content: Text(message)));
                },
                orElse: () {},
              );
            },
            child: page,
          ),
    );
  }
}