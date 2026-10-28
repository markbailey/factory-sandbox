from sandbox.report import report
from sandbox.scoring import score
from sandbox.util import clamp, normalize


def test_clamp():
    assert clamp(15, 0, 10) == 10
    assert clamp(-1, 0, 10) == 0


def test_normalize():
    assert normalize("  Ann ") == "ann"


def test_score_clamped():
    assert score([4, 4, 4]) == 10


def test_report():
    assert report(" Bob", [1, 2]) == "bob: 3"
