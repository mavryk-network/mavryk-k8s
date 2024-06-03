def test_package_exists() -> None:
    import mavrykchain

    assert vars(mavrykchain)["__name__"] == "mavrykchain"
